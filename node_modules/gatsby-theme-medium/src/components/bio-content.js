import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * Shadow me to add your own bio content
 */

export default ({ author, date }) => (
  <Fragment>
    {author}
    <br />
    {date}
  </Fragment>
);
