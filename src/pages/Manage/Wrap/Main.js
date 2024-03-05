import HeaderAdmin from "../../../components/Manage/layout/Header";

function Main({ children }) {
  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
}

export default Main;
