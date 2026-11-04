export const currentPath = () => window.location.hash.replace(/^#/, "") || "/";

export const navigate = (path) => {
  window.location.hash = path;
};

// Scroll to a section on the home page; navigates home first if needed.
export function goSection(id) {
  const scroll = () => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  if (id === "contact" || id === "top" || currentPath() === "/") {
    if (id !== "top" && !document.getElementById(id)) {
      navigate("/");
      setTimeout(scroll, 150);
    } else scroll();
  } else {
    navigate("/");
    setTimeout(scroll, 150);
  }
}
