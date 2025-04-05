import React from "react";

export default function LiveTradingView() {
  return (
    <section id="tradingview" className="bg-light py-5">
      <div className="container">
        <h2 className="display-4 text-center">Live TradingView Chart</h2>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="tradingview-widget-container"
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="tradingview-widget-container">
                    <div id="tradingview_12345"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                    <script type="text/javascript">
                      new TradingView.widget({
                        "width": "100%",
                        "height": "500",
                        "symbol": "BINANCE:BTCUSDT",
                        "interval": "60",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "en",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "hide_top_toolbar": false,
                        "save_image": false,
                        "container_id": "tradingview_12345"
                      });
                    </script>
                  </div>
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
