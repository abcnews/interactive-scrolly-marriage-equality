const html = require("bel");
import queryString from "query-string";

export function convert() {
  // Get chart elements
  const chartElements = document.querySelectorAll('a[href^="/news/interactives/chart"]');

  // Replace them in page
  for (const element of chartElements) {
    const urlString = element.href;
    const searchString = urlString.substring(urlString.indexOf("?"));
    const query = queryString.parse(searchString);

    const iframe = html` <iframe
      src="https://www.abc.net.au/dat/news/interactives/graphics/${query.chart}/child.html"
      width="100%"
      frameborder="0"
      marginheight="0"
      scrolling="no"
      crossorigin="anonymous"
      height="${query.chart === "20170811ssm-votecompass"
        ? 300
        : 0}px">
    </iframe>`;

    element.parentNode.replaceChild(iframe, element);
  }
}


