import { memo } from "react";

const FooterContacts = () => {
  const titleStyle = {
    fontFamily: "Noto Sans Georgian",
    color: "#FEBE0D",
    fontSize: "16px",
    marginBottom: "8px",
  };

  const textStyle = {
    fontFamily: "Noto Sans Georgian",
    color: "#FFFFFF",
    fontSize: "16px",
    margin: "4px 0",
  };

  return (
    <div>
      <p style={titleStyle}>Contacts :</p>
      <div>
        <p style={textStyle}>+977 9804056965</p>
        <p style={textStyle}>gauravbana840@gmail.com</p>
      </div>
    </div>
  );
};

export default memo(FooterContacts);
