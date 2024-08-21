import { Task } from "@lit/task";
import axios from "axios";
import { CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import '@material/web/elevation/elevation'
import '@material/web/button/filled-button'
import '@material/web/divider/divider'
import '@material/web/icon/icon'
import { styles } from './styles/market'

@customElement("vantage-main")
export class MainPanel extends LitElement {
   static styles = [styles]

   @property({ type: Number })
   skip = 0;
   category = 3

   @property({ type: String })
   name = "Potpot"
   occupation = "Web Dev"

   @property({ type: Number })
   counter = 0

   private _markets = new Task(this, {
      task: async ([skip, category]) => {
         const response = await axios.post("http://localhost:5000/api/markets/fetchmarkets", { skip, category });
         return response.data
      },
      args: () => [this.skip, this.category]
   })


   render() {
      return this._markets.render({
         complete: markets => (
            html`
               <h1>Markets</h1>
                  <div class="markets">
                     ${markets.map((market:any) => (html`
                           <div class="surface">
                              <md-elevation></md-elevation>

                              <div class="market-container">
                                 <div class="market-body">
                                    <h3>${market.question}</h3>
                                    <h4>00D: 00H: 00M: 00S<h4>
                                    <div class="option-buttons">
                                       ${market.fieldDetails.map((option: any)=>(
                                          html`
                                             <md-filled-button class="btn-${option.name}">
                                                ${option.name}
                                                <span>${option.predictions[0].amount}</span>
                                             </md-filled-button>
                                          `
                                       ))}
                                    </div>
                                 </div>
                                 <md-divider class="divider"></md-divider>
                                 
                                 <div class="market-footer">
                                    <h4><span class="dollar">$</span> 7000</h4>
                                    <div class="footer-date">
                                       <md-icon>schedule</md-icon>
                                       <h4> 2024-08-21</h4>       
                                    </div>
                                 </div>
                              </div>
                              
                           </div>
                     `))}
                  </div>

               <button @click=${() => this.skip -= 3}>Paginate Backwards</button>
               <button @click=${() => this.skip += 3}>Paginate Onwards</button>
            `
         ),
         error: (error) => console.log(error)
      })
   }

   // render(){
   //    return html`
   //       <h1>Hello POGING ${this.name}  + Occupation: ${this.occupation} ${this.counter}</h1>
   //       <button @click=${()=>this.counter = 50}>Add counter </button>
   //    `
   // }
}