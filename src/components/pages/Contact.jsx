function Contact() {
  return (
    <div className="constainer-main">
      <h1 className="text-center text-4xl text-pink-500 mb-10">Contact Us</h1>

      <form className="form-container">
        <input type="text" placeholder="Enter Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
        
        <input type="email" placeholder="Enter Your Email Address" className="input input-bordered input-secondary w-full max-w-xs" />
        
        <input type="tel" placeholder="Enter Your Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />

        <textarea className="textarea textarea-secondary" placeholder="Enter Here"></textarea>
      
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}

export default Contact
