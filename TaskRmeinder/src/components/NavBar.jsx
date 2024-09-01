export default function NavBar({ onNavClick }) {
    return (
      <div className="pl-1 bg-slate-300">
        <div className="navbar bg-neutral text-neutral-content">
          <button
            className="btn btn-ghost text-lg px-3"
            onClick={() => onNavClick("Send Reminder")}
          >
           +
          </button>
          <button
            className="btn btn-ghost text-lg px-3"
            onClick={() => onNavClick("My Reminder")}
          >
            Inbox
          </button>
          <button
            className="btn btn-ghost text-lg px-3"
            onClick={() => onNavClick("Sent Reminder")}
          >
            Sent Reminder
          </button>
        </div>
      </div>
    );
  }
  