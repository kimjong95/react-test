import { NoticePopover } from "./NoticePopover";

export const CheckboxLabel = (
  <span>
    I agree to
    <NoticePopover
      trigger={<span style={{ color: "blue" }}> terms and conditions</span>}
    />
  </span>
);
