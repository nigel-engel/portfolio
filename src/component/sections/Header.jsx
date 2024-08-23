import HeaderText from "../text/HeaderText";
import SubHeadingText from "../text/SubHeadingText";
import Avatar from "../images/Avatar";
import FlexCenterLayout from "../layout/FlexCenterLayout";
import SocialLinksText from "../text/SocialLinksText";
import ContainerLayout from "../layout/ContainerLayout";

const Header = () => {
  return (
    <ContainerLayout>
      <FlexCenterLayout>
        <div>
          <HeaderText text="Hi, I'm Nigel 👋" />
          <SubHeadingText text="Solutions Engineer currently diving deep into Full-Stack Development." />
        </div>
        <div>
          <Avatar
          src="/public/assets/nigel_engel.jpeg" />
        </div>
      </FlexCenterLayout>
      <SocialLinksText />
    </ContainerLayout>
  );
};

export default Header;
