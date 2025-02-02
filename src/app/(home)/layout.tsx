import Footer from "../_components/molecule/footer/footer";
import Header from "../_components/molecule/header/header";
;

export default function Layout({
  children,events
}: {
  children: React.ReactNode;
  events: React.ReactNode;
  }) {
  console.log(events)
  return (
    <div>
     
      <Header />
      {children}
      {events}
      <Footer />
    </div>
  );
}
