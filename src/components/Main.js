import SideBar from "./SideBar";

const Main = () => {
    return (
        <main>
            <SideBar />
            <h1>Dashboard</h1>
            <iframe
                className="dashboard"
                title="dashboard_hackathon"
                width="800" height="636"
                src="https://app.powerbi.com/view?r=eyJrIjoiMjJlMWZkZjgtODYxOC00NmU3LTkzMWMtODZmMDBhYjk1Yjg3IiwidCI6ImFhZjg4MjBhLTNiMjItNDEyYi1iNDc1LTc2ZjI2ZGU2OWRmMCJ9"
                frameBorder="0"
                allowFullScreen={true}
            ></iframe>
        </main>
    );
};

export default Main;
