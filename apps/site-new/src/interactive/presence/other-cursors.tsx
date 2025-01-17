import Cursor from "./cursor";
import { usePresenceWithCursors } from "./use-cursors";

export default function OtherCursors() {
  const otherUserIds = usePresenceWithCursors((state) =>
    Array.from(state.otherUsers.keys()),
  );
  const within = usePresenceWithCursors((state) => state.within);
  return (
    <div
      className={`${
        within === "window" ? "fixed" : "absolute"
      } z-20 top-0 left-0 right-0 bottom-0 pointer-events-none overflow-clip`}
    >
      {otherUserIds.map((id) => {
        return <Cursor key={id} userId={id} fill={"#00f"} />;
      })}
    </div>
  );
}
