import Link from "../../atoms/link/link";
import "./homeLinks.css"

function HomeLinks() {

    return (
        <div className="hnt-home-container">
            <Link link="/create-employee" className="hnt-home-link hnt-link-create">Create Employee</Link>
            <Link link="/view-employee" className="hnt-home-link hnt-link-view">View Current Employee</Link>
        </div>
        
    )
}

export default HomeLinks;