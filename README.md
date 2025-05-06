# Grimmjow's Custom Static Site Generator (SSG)

<p align="center">
    <a href="#" style="display: block;" align="center">
        <img src="https://i.pinimg.com/originals/0f/38/41/0f3841fa84ee39d2e686433c3ecc2ebe.gif" alt="sosuke aizen" width="60%" />
    </a>
</p>

Hi ✋🏿 this is a customizable **Static Site Generator (SSG)** that converts Markdown files into static HTML pages. a Static Site Generator (SSG) tailored for technical software development documentation. It converts Markdown files into static HTML pages, streamlining the process of creating and maintaining project documentation.

## Features

- **Markdown to HTML Conversion**: Effortlessly transform your Markdown files into static HTML pages.
- **Customizable Templates**: Utilize your own HTML templates to maintain consistent styling across all pages.
- **Efficient File Handling**: Automatically reads from the `content` directory and outputs to the `dist` directory.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Lawani-EJ/grimmjow.git
   cd grimmjow
   ```

2. **Install Dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

## Usage

1. **Prepare Your Content**:

   Place your Markdown files in the `content` directory. For example, `content/index.md`.

2. **Build the Site**:

   Run the build script to generate your static site:

   ```bash
   node build.js
   ```

   This will convert your Markdown files into HTML and place them in the `dist` directory.

3. **Customize the Template**:

   Modify `template.html` to change the structure or styling of your generated HTML pages. Ensure you include a placeholder (e.g., `{{content}}`) where the converted Markdown content should be injected.

## Project Structure

- `build.js`: The main build script that processes Markdown files.
- `content/`: Directory containing your Markdown files.
- `dist/`: Output directory for the generated HTML files.
- `template.html`: HTML template used for wrapping the converted Markdown content.
- `package.json`: Project metadata and dependencies.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.
---