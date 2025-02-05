import EventFilter from "../_components/molecule/eventFilter/eventFilter";
import YourSearch from "./_search/search";
import SearchProvider from "./_searchContext/searchContext";
export default function Layout({
  children,
  eventsList,
}: {
  children: React.ReactNode;
  eventsList: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">{children}</div>
      <div className="lg:col-span-2">{eventsList}</div>
    </div>
  );
}
