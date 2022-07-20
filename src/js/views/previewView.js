import icons from 'url:../../img/icons.svg';

import View from './View';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const urlId = window.location.hash.slice(1);
    const { id, image, publisher, title } = this._data;
    const hasDataKey = this._data.key ? '' : 'hidden';
    return `
    <li class="preview">
      <a class="preview__link ${
        id === urlId ? 'preview__link--active' : ''
      }"  href="#${id}">
        <figure class="preview__fig">
          <img crossorigin="anonymous" src="${image}" alt=${title} />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${title}</h4>
          <p class="preview__publisher">${publisher}</p>
          <div class="preview__user-generated ${hasDataKey}">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `;
  }
}

export default new PreviewView();
