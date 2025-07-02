import Sidebar from "../../components/admin/Sidebar";
import MainContent from "../../components/admin/MainContent";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen" >
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default Dashboard;