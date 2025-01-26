import { Link } from "react-router";
import { Button } from "./button";

interface LinkItemProps {
  dir: string;
  text: string;
}

const LinkItem = ({ dir, text }: LinkItemProps) => {
  return (
    <Link to={dir}>
      <Button role="button" aria-label={`Navigate to ${text}`} className="font-display">
        {text}
      </Button>
    </Link>
  );
};

export default LinkItem;
