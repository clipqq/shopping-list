function main() {

  // Add item
  $('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    const newItem = $(this).find('#shopping-list-entry').val();
    $('.shopping-list').append(
      `
      <li>
        <span class="shopping-item"> ${newItem} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `
    )
  });

  //--------------------------------------------------------------------------
  // Delete item
  $('ul').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
  });

  //--------------------------------------------------------------------------
  // Check item
  $('ul').on('click', '.shopping-item-toggle', function(e) {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });
}

$(main)
