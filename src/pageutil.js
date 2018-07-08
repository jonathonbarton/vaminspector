function UIButtonClicked( buttonQuery, fn ){
  document.querySelector(buttonQuery).addEventListener( 'click', fn );
}

function settingsFromForm( UIForm ){
  const entries = Array.from(new FormData(UIForm).entries());
  const settings = {};
  entries.forEach( function( [key,value] ){
    if( isNaN( parseFloat(value) ) === false ){
      settings[ key ] = parseFloat( value );
    }
    else{
      settings[ key ] = value;
    }
  });
  return settings;
}

module.exports = {
  UIButtonClicked,
  settingsFromForm
};