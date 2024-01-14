function Contact() {
  return (
    <div className="constainer-main">
      <h1 className="text-center text-4xl text-pink-500 mb-10">Contact Us</h1>

      <form className="form-container">
        <input type="text" id="name" placeholder="Enter Your Name" autoComplete="off" className="input input-bordered input-secondary w-full max-w-xs" />
        
        <input type="email" id="email" placeholder="Enter Your Email Address" autoComplete="off" className="input input-bordered input-secondary w-full max-w-xs" />
        
        <input type="tel" id="tel" placeholder="Enter Your Phone Number" autoComplete="off" className="input input-bordered input-secondary w-full max-w-xs" />

        <textarea className="textarea textarea-secondary" id="textarea" autoComplete="off" placeholder="Enter Here"></textarea>
      
        <button className="btn btn-success" autoComplete="off">Submit</button>
      </form>
    </div>
  )
}

export default Contact
