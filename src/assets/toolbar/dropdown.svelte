<script>
</script>

<div class="dropdown">
  <input type="text" value="New Document" />
  <div class="dropdown-content">
    <input type="button" value="Hello World!" />
  </div>
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    color: rgb(220, 220, 220);
    width: 150px;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgb(60, 60, 60);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    color: rgb(220, 220, 220);
    min-width: 150px;
    left: 0px;
  }

  .dropdown-content:hover {
    cursor: pointer;
    background-color: rgb(52, 52, 52);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  input[type="text"],
  input[type="button"] {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background-color: rgb(60, 60, 60);
    font-size: 15px;
    line-height: 0;
    text-align: center;
  }

  input[type="text"] {
    width: 100%;
    height: 100%;
  }

  input[type="button"] {
    width: 120px;
    height: 55px;
  }

  input[type="text"]:hover,
  input[type="button"]:hover {
    background-color: rgb(52, 52, 52);
  }

  input[type="button"]:hover {
    cursor: pointer;
  }
</style>
