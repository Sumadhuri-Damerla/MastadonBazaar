import React from 'react';
import logo from '../../images/don.png';
import logo1 from '../../images/logo.png';

const Header = () => {
    return (
        <div className="main-header">
            <div className="container">
				
				<div class="form-group">
    			&nbsp;
				</div>
					
                <div className="row">
                    <div class="col-sm-3">
					</div>
                    
                    <div class="col-sm-6" align="center">
					<img src={logo1} alt="Logo1" height="45" width="455" />
                    </div>
					
					<div class="col-sm-3" align="right">
					<img src={logo} alt="Logo" height="60" width="66" />
                    </div>
					
					
                </div>
            </div>
        </div>
    );
}
export default Header;

