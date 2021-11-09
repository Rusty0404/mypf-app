import React from 'react'

  const SNSSection = () => {
  
    return (
      <div>
        <div className="share-buttons">
  <div className="share-button">
    <div className="share-button-secondary">
      <div className="share-button-secondary-content">
        <a href="https://twitter.com/enjinia_f">twitter</a>
      </div>
    </div>
    <div className="share-button-primary">
      <i className="share-button-icon fa fa-twitter"></i>
    </div>
  </div>

  <div className="share-button">
    <div className="share-button-secondary">
      <div className="share-button-secondary-content">
        <a href="https://www.facebook.com/profile.php?id=100009382163802">facebook</a>
      </div>
    </div>
    <div className="share-button-primary">
      <i className="share-button-icon fa fa-facebook"></i>
    </div>
  </div>

  <div className="share-button">
    <div className="share-button-secondary">
      <div className="share-button-secondary-content">
        <a href="https://github.com/Rusty0404">Git Hub</a>
      </div>
    </div>
    <div className="share-button-primary">
    <i className="share-button-icon fa fa-github-square"></i>
    </div>
  </div>

  <div className="share-button">
    <div className="share-button-secondary">
      <div className="share-button-secondary-content">
        <a href="https://www.instagram.com/kazumin.web"> Instagram</a>
      </div>
    </div>
    <div className="share-button-primary">
      <i className="share-button-icon fa fa-instagram"></i>
    </div>
  </div>
</div>
      </div>
      
    )
  }

  export default SNSSection;