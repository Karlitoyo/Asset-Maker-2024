import * as React from "react";

const HomeMid = () => (
  <section>
    <div className="flex justify-center ml-40">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="6 Month Vault"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-primary">
              6 Month Vault
            </span>
            <div className="stats bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Account balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm btn-success">Add funds</button>
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Current balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm">Withdrawal</button>
                  <button
                    className="btn btn-sm"
                    onClick={async () => {
                      const accounts = await (window as any).ethereum.request({
                        method: "eth_requestAccounts",
                      });
                      console.log(accounts);
                    }}
                  >
                    deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="12 Month Vault"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-primary">
              12 Month Vault
            </span>
            <div className="stats bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Account balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm btn-success">Add funds</button>
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Current balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm">Withdrawal</button>
                  <button className="btn btn-sm">deposit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="24 Month Vault"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
                <div className="indicator">
        <span className="indicator-item indicator-center badge badge-primary">
          24 Month Vault
        </span>
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeMid;
