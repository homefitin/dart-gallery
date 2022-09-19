import React from "react";

export const NavigationBar = (props) => {
<<<<<<< HEAD
  return <div>



    
    <nav class="navbar">
        <div class="container-fluid">
        <span class="navbar-brand m-0 fw-bold text-white"
            ><h1>dArt</h1></span
          >
          <span class="nav-link border rounded-pill bg-light">
            <span id='balance'>{props.cUSDBalance}</span>
            cUSD
          </span>
        </div>
      </nav>
  </div>;
=======
	return (
		<div>
			<nav className="navbar">
				<div className="container-fluid">
					<span className="navbar-brand m-0 fw-bold text-white">
						<h1>Tack Aid</h1>
					</span>
					<span className="nav-link border rounded-pill bg-light">
						<span id="balance">{props.cUSDBalance}</span>
						cUSD
					</span>
				</div>
			</nav>
		</div>
	);
>>>>>>> ea419eac922cf5455f21d5b588e73390d4e9ff4d
};
