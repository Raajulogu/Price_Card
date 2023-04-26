import logo from './logo.svg';
import './App.css';

function App() {
  var content=[
  {
    type:"FREE",
    price:"0",
    user:"Single User",
    storage:"5GB Storage",
    public:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    phone:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    status:"Monthly Status Reports"
  },{
    type:"PLUS",
    price:"9",
    user:"5 User",
    storage:"50GB Storage",
    public:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    phone:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    status:"Monthly Status Reports"
  },{
    type:"PRO",
    price:"49",
    user:"Unlimited User",
    storage:"150GB Storage",
    public:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    phone:"Dedicated Phone Support",
    subdomain:"Unlimited Free Subdomain",
    status:"Monthly Status Reports"
  }
  ];
  return (
    <div className="App">
      <div className="Box">
        {content.map((value,index)=>(
          <Cards
          key={index}
          prod={value}
          />
        ))}
      </div>
    </div>
  );
}

function Cards({prod}){
  var list;
  if(prod.type==="FREE"){
    list=(<div className="Free">
      <li><span id="cross">×</span>{prod.private}</li>
      <li><span id="cross">×</span>{prod.phone}</li>
      <li><span id="cross">×</span>{prod.subdomain}</li>
      <li><span id="cross">×</span>{prod.status}</li>
      </div>)
    
  }
  else if(prod.type==="PLUS"){
    list=(<div>
      <li><span id="tick">✓</span>{prod.private}</li>
      <li><span id="tick">✓</span>{prod.phone}</li>
      <li><span id="tick">✓</span>{prod.subdomain}</li>
      <li id="Plus"><span id="cross">×</span>{prod.status}</li>
      </div>)
  }
  else{
    list=(<div>
      <li><span id="tick">✓</span>{prod.private}</li>
      <li><span id="tick">✓</span>{prod.phone}</li>
      <li><span id="tick">✓</span>{prod.subdomain}</li>
      <li><span id="tick">✓</span>{prod.status}</li>
      </div>)
  }

  return(
    <div className="Cards">
      <div>
        <h5>{prod.type}</h5>
        <h1>${prod.price}<span id="month">/month</span></h1>
        <ul type="none">
          <li><span id="tick">✓</span>{prod.user}</li>
          <li><span id="tick">✓</span>{prod.storage}</li>
          <li><span id="tick">✓</span>{prod.public}</li>
          <li><span id="tick">✓</span>{prod.access}</li>
          {list}
          
        </ul>
        <button>Button</button>
      </div>
      
    </div>
  );
}

export default App;
