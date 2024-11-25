import {Component} from 'react'
import './index.css'

class GameList extends Component {
  render() {
    const {tabsList, imagesList, activeTab, setActiveTab, onThumbnailClick} =
      this.props

    const filteredImages = imagesList.filter(
      image => image.category === activeTab,
    )

    return (
      <div className="game-list">
        <ul className="tabs">
          {tabsList.map(tab => (
            <li key={tab.tabId}>
              <button
                className={`tab-button ${
                  activeTab === tab.tabId ? 'active' : ''
                }`}
                onClick={() => setActiveTab(tab.tabId)}
              >
                {tab.displayText}
              </button>
            </li>
          ))}
        </ul>

        <ul className="images-container">
          {filteredImages.map(image => (
            <li key={image.id} className="image-item">
              <button
                type="button"
                onClick={() => onThumbnailClick(image.imageUrl)}
              >
                <img
                  src={image.thumbnailUrl}
                  alt="thumbnail"
                  className="thumbnail-image"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default GameList
