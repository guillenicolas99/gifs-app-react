import { Link } from "react-router-dom";

export default function LinksBtn ( {to, children} ) {
    return(
        <Link className="link-btn" to={to}>
            {children}
        </Link>
    )
}