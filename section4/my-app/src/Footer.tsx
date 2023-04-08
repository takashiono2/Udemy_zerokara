import "./Footer.css";

type Props = {
  user: {
    name: string,
    createdAt: Date,
  };
};

const Footer = (props: Props) => {
  const month = props.user.createdAt.toLocaleString("ja",{month: "long"});
  return(
    <div className="body">
      <p className="letters">{props.user.name}</p>
      <p className="letters">{month}</p>
    </div>
  );
};
export default Footer;