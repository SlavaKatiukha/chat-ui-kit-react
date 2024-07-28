import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const ConversationStream = ({ className, children, ...rest }) => {
  const cName = `${prefix}-conversation-stream`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {children}
    </div>
  );
};

ConversationStream.displayName = "ConversationStream";

ConversationStream.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default ConversationStream;
