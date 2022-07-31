import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Order } from '../../common/entities/order.entity';

@Injectable()
export class OrderMailServices {
  constructor(private readonly mailerService: MailerService) {}

  public notifyAboutOrder(order: Order): void {
    const { phone, name, createdAt, email, id } = order;
    this.mailerService
      .sendMail({
        to: process.env.MAIL_FROM,
        from: process.env.MAIL_FROM,
        subject: `Новое обращение с сайта от ${name}`,
        template: 'noticeAboutOrder',
        context: {
          phone: phone.length ? phone : 'Не указан',
          email,
          name,
          id,
          createdAt: createdAt.toLocaleString('ru'),
        },
      })
      .catch((e) => console.log(e, process.env.MAIL_TRANSPORT));
  }
}
