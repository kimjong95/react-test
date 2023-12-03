import { Popup } from "semantic-ui-react";

type NoticePopoverProps = {
  trigger: JSX.Element;
};

export const NoticePopover = ({ trigger }: NoticePopoverProps) => (
  <Popup trigger={trigger} position="bottom right" wide="very">
    <div data-testid="notice-popover">
      no ice cream will actually be delivered
    </div>
  </Popup>
);
