export const handleNavLinkClick = (pathname, setVisitedPages) => {
    console.log(pathname)
    setVisitedPages(prevPages => [pathname, ...prevPages]);
}