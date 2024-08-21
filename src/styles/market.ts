import { css } from "lit"

export const styles = css`
.surface {
   position: relative;
   border-radius: 8px;
   height: fit-content;
   width: 450px;
	margin-right: 20px;
   --md-elevation-level: 3;
 }

 .markets{
	display: flex;
	margin: 20px;
 }

 .option-buttons{
	margin-top: 20px;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
 }

md-filled-button.btn-YES{
	--md-filled-button-container-color: #E35728;
	width: 47%;
	border-radius: 8px;
}

md-filled-button.btn-NO{
	border-radius: 8px;
	width: 47%;
	--md-filled-button-container-color: #163844;
}

 .divider{
	margin-top: 20px;
	
	--md-divider-color: #B7B4BA;
	--md-divider-thickness: 2px;
 }

.market-container{
	width: 100%;

}

.market-body{
	padding: 10px 20px 0 20px;
}


.market-footer{
	display: flex;
	justify-content: space-around;
}

.dollar{
	color: #00977F;
}

md-icon {
  --md-icon-size: 20px;
}

.footer-date{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 110px;
}



`