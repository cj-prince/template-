import React from 'react'
import Home from './pages/Home'
import Alert from './pages/Alert'
import Template from './components/TemplateList';




function App() {
  return (
    <section className="section">
      <div className="top">
        <Home />
        <Alert />
        <Template/>
      </div>
    </section>
  );
}

export default App;
