<template lang="pug">
    v-row
        v-col.my-0.py-0(cols='12' sm='7')
            v-list-item.pa-0.my-0
                v-list-item-avatar
                    v-icon(large) mdi-account
                v-list-item-content
                    v-list-item-title.mb-1.subtitle-2 {{ authorName? authorName : 'Autor anónimo' }}
                    v-list-item-subtitle.caption {{year}}
        v-col.p-r.my-0.py-0(cols='12' sm='5')
            v-list-item.py-0
                v-row(justify-sm='end')
                    template( v-if='whatsapp' )
                        v-btn(icon :href='whatsapp' target="_blank")
                            v-icon mdi-whatsapp
                    template( v-if='facebook' )
                        v-btn(icon :href='facebook' target="_blank")
                            v-icon mdi-facebook
                    template( v-if='twitter' )
                        v-btn(icon :href='twitter' target="_blank")
                            v-icon mdi-twitter
                    template( v-if='linkedin' )
                        v-btn(icon :href='linkedin' target="_blank")
                            v-icon mdi-linkedin
                    template( v-if='github' )
                        v-btn(icon :href='github' target="_blank")
                            v-icon mdi-github
                    template( v-if='gitlab' )
                        v-btn(icon :href='gitlab' target="_blank")
                            v-icon mdi-gitlab
</template>
<script>
export default {
    props:[
        "authorName",
        "year",
        "whatsapp",
        "facebook",
        "twitter",
        "linkedin",
        "github",
        "gitlab",
    ]
}
</script>