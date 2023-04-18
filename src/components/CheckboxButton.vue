<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>         
    </div>
</template>
  
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        }
    }
}
</script>
  