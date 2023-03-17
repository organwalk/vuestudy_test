<template>
    <button :class="buttonClass" v-bind="$attrs">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'Test_Button',
    computed: {
      buttonClass() {
        return {
          'btn': true,
          'btn-primary': this.$attrs.variant === 'primary',
          'btn-secondary': this.$attrs.variant === 'secondary',
          'btn-success': this.$attrs.variant === 'success',
          'btn-danger': this.$attrs.variant === 'danger',
          'btn-warning': this.$attrs.variant === 'warning',
          'btn-info': this.$attrs.variant === 'info',
          'btn-light': this.$attrs.variant === 'light',
          'btn-dark': this.$attrs.variant === 'dark'
        }
      }
    }
  }
  </script>
  
  <style>
  .btn {
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  
  .btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
  }
  
  .btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }
  </style>