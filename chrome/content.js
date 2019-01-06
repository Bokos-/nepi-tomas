$(function() {
  function displayVideoOptions(body, options) {
    body.css("position", "relative");

    const div = $("<div></div>");

    div.css({
      position: "absolute",
      left: "0",
      top: "170px"
    });

    const aStyle = {
      background: "#BF1E11",
      margin: "0 0 10px 0",
      "border-top-right-radius": "5px",
      "border-bottom-right-radius": "5px",
      padding: "10px 20px",
      display: "block",
      "text-decoration-line": "none",
      color: "#ffffff",
      fontSize: "15px"
    };

    options.forEach(function(element) {
      const el = $(element);

      const quality = el.data("quality");

      if (!quality || quality === "Auto") {
        return;
      }

      const a = $(`
          <a href='${el.attr("src")}' 
             title='${el.attr("type")}' 
             target='_blank'>${quality}</a>
             `);

      a.css(aStyle);

      a.mouseenter(function() {
        $(this).css("text-decoration-line", "underline");
      }).mouseout(function() {
        $(this).css("text-decoration-line", "none");
      });

      a.appendTo(div);
    });

    div.appendTo(body);
  }

  const videoPlayer = $("#video-player_html5");

  if (videoPlayer) {
    const options = [];
    videoPlayer.children().each(function() {
      options.push(this);
    });

    if (options.length) {
      const body = $("body");
      displayVideoOptions(body, options);
    }
  }
});
