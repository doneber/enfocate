<template lang="pug">
v-footer.pt-6.pb-3(padless color="primaryDark")
  p
    | &iquest;Queres contactar? 
    | Escr&iacute;benos a 👉
    a.font-weight-medium(href='mailto:doneber.dev@gmail.com') doneber.dev@gmail.com
  .links
    a.font-weight-medium(href='https://discord.doneber.dev') Discord
    span &bull;
    a.font-weight-medium(href='https://www.youtube.com/c/doneber?sub_confirmation=1') YouTube
    span &bull;
    a.font-weight-medium(href='https://doneber.dev') Website
    span &bull;
    a.font-weight-medium(href='https://github.com/doneber') GitHub

  v-col.text-center(cols='12')
    | {{ new Date().getFullYear() }} — 
    span.font-weight-medium @Enfocate
</template>
<style>
footer {
    position: sticky;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 32px 0;
    text-align: center;
}

footer p {
    margin: 0;
    font-size: 1.1rem;
}
footer p a {
    text-decoration: underline;
}

.links {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 12px;
}
</style>