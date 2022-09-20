export default function Header() {
  return (
    <nav class="navbar navbar-dark " style={{ backgroundColor: "#06281E" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://pbs.twimg.com/media/C4puoESW8AE98a4.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          PharmacyManagement
        </a>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
