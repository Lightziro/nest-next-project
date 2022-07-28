import React, { useState } from "react";
import { Divider, Stack } from "@mui/material";
import classes from "../../../../styles/landing/services.module.scss";
import { ContactModal } from "../../../smart/contact-modal/ContactModal";

export const PriceServices: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className={classes.priceWrapper}>
      <Divider sx={{ my: 3 }} />
      <div className="help-text">
        Стоимость оказания услуг обсуждается индивидуально в зависимости от
        услуги и требований к ней
      </div>
      <div className="text-center mt-2">
        <button className="button-contact " onClick={handleOpen}>
          Связаться с нами
        </button>
      </div>

      <ContactModal open={open} handleOpen={handleOpen} />
    </div>
  );
};
