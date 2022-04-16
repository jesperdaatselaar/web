function TextSection (props) {
    return (
      <section className="section">
        <div className="content">
          <p>
            {props.text}
          </p>
        </div>
      </section>
    );
}

export default TextSection;