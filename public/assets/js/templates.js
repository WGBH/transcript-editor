window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["account.ejs"] = '<% if (user.signedIn) { %>  <div class="select">    <div class="select-active" title="Signed in as <%= user.name %>"><%= user.name %></div>    <div class="select-options account-menu menu">      <a href="#sign-out" class="sign-out-link select-option menu-item">Sign out</a>    </div>  </div><% } else { %>  <div class="select">    <div class="select-active">Sign in with</div>    <div class="select-options account-menu menu">      <% _.each(project.authProviders, function(provider) { %>        <a href="#sign-in-with-<%= provider.name %>" data-provider="<%= provider.name %>" class="auth-link select-option menu-item" data-active="Signing In..."><%= provider.label %></a>      <% }) %>    </div>  </div><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["crumbs.ejs"] = '<% _.each(crumbs, function(crumb){ %>  <% if (crumb.url) { %>    <a href="<%= crumb.url %>" class="crumb">  <% } else { %>    <div class="crumb">  <% } %>    <% if (crumb.image) { %>      <div class="crumb-image"><img src="<%= crumb.image %>" alt="<%= crumb.label %> Icon" /></div>    <% } %>    <div class="crumb-label"><%= crumb.label %></div>  <% if (crumb.url) { %>    </a>  <% } else { %>    </div>  <% } %><% }) %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["menu.ejs"] = '<div class="<%= menu_key %>-menu menu">  <% _.each(menu, function(item) { %>    <% if (!item.validRoutes || item.validRoutes.indexOf(route.route) > -1) { %>      <% if (item.modal) { %>        <a data-modal="<%= item.modal %>" class="menu-item modal-invoke"><%= item.label %></a>      <% } else { %>        <a href="<%= item.url %>" class="menu-item <%= item.url==route.path ? \'active\': \'\' %>"><%= item.label %></a>      <% } %>    <% } %>  <% }) %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["modal.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <% if (hasOwnProperty("title")) { %>      <header id="modal-label"><%= title %></header>    <% } %>    <div class="modal-content">      <% _.each(pages, function(page, i){ %>        <div class="modal-page <%= page.file ? page.file : \'\' %> <%= active_page==i ? \'active\': \'\' %>">          <%= page.contents %>        </div>      <% }) %>    </div>    <% if (pages.length > 1) { %>      <div class="modal-tabs">        <% _.each(pages, function(page, i){ %>          <a class="modal-tab <%= active_page==i ? \'active\': \'\' %>" data-tab="<%= i %>"><%= i+1 %>. <%= page.label %></a>        <% }) %>      </div>    <% } %>    <footer>      <% if (active_page > 0) { %>        <a class="button modal-tab" data-tab="<%= active_page-1 %>">Previous</a>      <% } %>      <% if (active_page >= pages.length-1) { %>        <a class="button pull-right modal-dismiss"><%= hasOwnProperty("doneLabel") ? doneLabel : "Finished" %></a>      <% } else if (pages.length > 1) { %>        <a class="button pull-right modal-tab" data-tab="<%= active_page+1 %>">Next</a>      <% } %>    </footer>  </div>  <a class="modal-close modal-dismiss" title="Close this modal">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["page.ejs"] = '<div class="<%= page_key %> page">  <%= content %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["header_title.ejs"] = '<% if (project.logo) { %>  <a href="/" title="<%= project.name %>" class="title" aria-label="Click to return to homepage" title="Click to return to homepage"><img src="<%= project.logo %>" alt="Logo" class="logo" /></a><% } else { %>  <h1 class="title" aria-label="Click to return to homepage" title="Click to return to homepage"><a href="/"><%= project.name %></a></h1><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_edit.ejs"] = '<% if (page_conventions) { %><div id="conventions-page" class="conventions-page sticky">  <%= page_conventions %>  <a class="tab toggle-active" data-target="#conventions-page" label-active="Hide Conventions" label-inactive="Show Conventions"></a></div><% } %><% if (page_content) { %><div class="transcript-page">  <%= page_content %></div><% } %><div id="transcript-lines" class="transcript-lines"></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_facets.ejs"] = '<% if (collections.length > 2) { %>  <div class="facet">    <label for="filter-by-collection">Filter by Collection: </label>    <div name="filter-by-collection" class="select collection">      <div class="select-active"><%= active_collection.title %></div>      <div class="select-options">        <% _.each(collections, function(collection) { %>          <a data-filter="collection_id" data-value="<%= collection.id %>" class="select-option filter-by <%= active_collection.id == collection.id ? \'selected\' : \'\' %>" data-active="<%= collection.title %>" title="<%= collection.title %><%= collection.description ? \': \'+collection.description : \'\' %>"><%= collection.title %></a>        <% }) %>      </div>    </div>  </div><% } %><div class="facet">  <label for="sort-by">Sort by: </label>  <div name="sort-by" class="select sort">    <div class="select-active"><%= active_sort.label %></div>    <div class="select-options">      <% _.each(sort_options, function(sort) { %>        <a data-sort="<%= sort.name %>" data-order="<%= sort.order %>" class="select-option sort-by <%= active_sort.id == sort.id ? \'selected\' : \'\' %>" data-active="<%= sort.label %>" title="<%= sort.label %>"><%= sort.label %></a>      <% }) %>    </div>  </div></div><div class="facet">  <form id="search-form" class="search-form">    <input name="keyword" value="" placeholder="Search Title/Description" />    <button type="submit" class="submit"></button>  </form></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_index.ejs"] = '<div data-sticky="#transcript-facets" class="sticky-on-scroll">  <div id="transcript-facets" class="transcript-facets">  </div></div><div id="transcript-results" class="transcript-results"></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_item.ejs"] = '<a href="#<%= path %>" class="transcript-item" title="<%= collection_title ? collection_title + \': \' : \'\' %><%= title %><%= description ? \' - \'+description : \'\' %>">  <div class="item-image" style="background-image: url(<%= image_url %>)"></div>  <% if (collection_title) { %>    <div class="item-subtitle"><%= collection_title %></div>  <% } %>  <div class="item-title"><%= title %></div>  <% if (description) { %>    <div class="item-description"><%= description %></div>  <% } %>  <div class="item-info">    <%= UTIL.formatTimeAlt(duration) %>  </div>  <% if (percent_completed > 0) { %>  <div class="item-status">    <div class="item-status-bar" style="width: <%= percent_completed %>%"></div>    <div class="item-status-text"><%= percent_completed %>% completed</div>  </div>  <% } %></a>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line.ejs"] = '<div sequence="<%= sequence %>" class="line <%= status.name %> <%= is_editable ? \'\' : \'not-editable\' %> <%= user_text ? \'user-edited\' : \'\' %>">  <div class="time"><%= UTIL.formatTimeMs(start_time) %></div>  <div class="controls">    <a class="control toggle-play"></a>  </div>  <div class="status <%= status.name %>">    <div class="status-description" data-description="<%= status.description %>"></div>  </div>  <div class="options">    <% if (status.name == \'reviewing\') { %>      <a class="button verify" title="Choose the best submitted edit">Verify</a>    <% } else if (status.name == \'completed\') { %>      <!-- <a class="button flag" title="Flag this line as incorrect"></a> -->    <% } %>    <!-- <a class="button star" title="Star this line"></a> -->  </div>  <div class="text">    <% if (is_editable) { %>      <input class="text-input" type="text" value="<%= display_text %>" user-value="<%= user_text %>"  />    <% } else { %>      <div class="text-input not-editable" value="<%= display_text %>" user-value="<%= user_text %>"><%= display_text %></div>    <% } %>  </div></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line_verify.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <header id="modal-label"><%= title %> <a class="control toggle-play"></a></header>    <div class="modal-content">      <% _.each(edits, function(edit, i){ %>        <a class="option <%= edit.active ? \'active\' : \'\' %>" edit-id="<%= edit.id %>"><%= edit.text %></a>      <% }) %>    </div>    <footer>      <a class="button none-correct">None of these are correct</a>      <a class="button pull-right submit">Submit</a>    </footer>  </div>  <a class="modal-close modal-dismiss" title="Close this modal">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_list.ejs"] = '<div class="transcript-list">  <% _.each(transcripts, function(transcript) { %>    <%= template_item(transcript) %>  <% }) %></div><% if (has_more) { %><a href="#more" class="list-next button">Load More</a><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_toolbar.ejs"] = '<div class="transcript-toolbar inverse">  <div class="controls">    <% _.each(controls, function(control){ %>      <div class="control <%= control.id %>" aria-label="<%= control.keyDescription %>" title="<%= control.keyDescription %>" style="width: <%= control_width_percent %>%">        <div class="label" data-label="<%= control.label %>"></div>        <div class="key"><%= control.key %></div>      </div>    <% }) %>  </div></div><%= menu %>';