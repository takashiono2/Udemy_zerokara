import "./Footer.css";

type Props = {
  user: {
    name: string,
    createdAt: Date,
  };
};

const Footer = () => {
  // const month = props.user.createdAt.toLocaleString("ja",{month: "long"});
  return(
    <div className="footer-body">
      <p className="letters">This is footer</p>
    </div>
  );
};
export default Footer;