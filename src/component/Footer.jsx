const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border bg-info rounded-top">
          <div class="col-md-4 d-flex align-items-center py-2">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-dark fw-bold">React Developer</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3 p-3 fw-bold">
              "To become a good developer, the first thing is to focus on the
              fundamentals."
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
