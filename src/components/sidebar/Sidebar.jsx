import "./sidebar.scss";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ASM</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Option</div>
    </div>
  );
};
export default SideBar;
