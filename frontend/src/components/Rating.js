const Rating = {
  render: (props) => {
    if (!props.value) {
      return '<div></div>';
    }
    return `
    <div class="rating">
    <span>
    <i class="${
      props.value >= 1
        ? 'fa fa-star'
        : props.value >= 0.5
        ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 2
        ? 'fa fa-star'
        : props.value >= 1.5
        ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 3
        ? 'fa fa-star'
        : props.value >= 2.5
          ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 4
        ? 'fa fa-star'
        : props.value >= 3.5
          ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 5
        ? 'fa fa-star'
        : props.value >= 4.5
          ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 6
        ? 'fa fa-star'
        : props.value >= 5.5
          ? 'fa fa-star-half-alt'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 7
        ? 'fa fa-star'
        : props.value >= 6.5
          ? 'fa fa-star-half-alt'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 8
        ? 'fa fa-star'
        : props.value >= 7.5
          ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
      <span>
    <i class ="${props.value >= 9
        ? 'fas fa-star'
        : props.value >= 8.5
          ? 'fas fa-star-half-alt'
        : 'fas fa-star'}">
          </i>
    </span>
      <span>
    <i class="${props.value >= 10
        ? 'fa fa-star'
        : props.value >= 9.5
          ? 'fa fa-star-half-o'
        : 'fa fa-star-o'}">
          </i>
    </span>
    <span>
    ${props.text || ''}
    </span>
    </div>
    `
  },
};

export default Rating;