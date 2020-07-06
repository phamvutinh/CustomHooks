import React from "react";
import PropTypes from "prop-types";
import { useCopyToClipboard } from "../../customHooks";

export default function Button({ textToCopy = "" }) {
  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  return (
    <button onClick={() => handleCopy(textToCopy)}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}

Button.propTypes = {
  textToCopy: PropTypes.string,
};
