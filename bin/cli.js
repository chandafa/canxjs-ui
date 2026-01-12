#!/usr/bin/env node

/**
 * Canx UI CLI
 * Supports: 
 * - npx canx-ui init (Setup utils and basic css)
 * - npx canx-ui add [component] (Add specific component)
 */
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { registry } from "./registry.js";

const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

const COMPONENTS_DIR = join(process.cwd(), "src", "components", "ui");
const LIB_DIR = join(process.cwd(), "src", "lib");
const UTILS_PATH = join(LIB_DIR, "utils.ts");

// Helper to ensure directory exists
function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    // console.log(`   Created directory: ${dir}`);
  }
}

if (command === "init") {
  console.log("🎨 Initializing Canx UI...");

  // 1. Create lib/utils.ts
  ensureDir(LIB_DIR);
  if (!existsSync(UTILS_PATH)) {
    console.log("   Creating src/lib/utils.ts...");
    writeFileSync(UTILS_PATH, registry.utils);
  } else {
    console.log("   src/lib/utils.ts already exists.");
  }

  // 2. Hint about CSS
  console.log("\n✅ Initialization complete!");
  console.log("   \n⚠️  Requirement: Make sure you have the following in your global CSS (v4 compatible variables):");
  console.log("   (We didn't overwrite your globals.css to be safe, but here is what you need)");
  console.log(registry.cssVars);
  console.log("\n   📦 Dependencies needed:");
  console.log("   npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-slot");

} else if (command === "add") {
    if (!componentName) {
        console.error("❌ Please specify a component to add. Example: npx canx-ui add button");
        process.exit(1);
    }

    const template = registry[componentName.toLowerCase()];
    if (!template) {
        console.error(`❌ Component '${componentName}' not found in registry.`);
        console.log("   Available components: button, input, modal");
        process.exit(1);
    }

    console.log(`📦 Adding ${componentName}...`);
    
    // Check if initialized
    if (!existsSync(UTILS_PATH)) {
        console.warn("⚠️  src/lib/utils.ts not found. It is recommended to run 'npx canx-ui init' first.");
    }

    ensureDir(COMPONENTS_DIR);
    const componentPath = join(COMPONENTS_DIR, `${componentName.toLowerCase()}.tsx`);
    
    if (existsSync(componentPath)) {
        console.log(`   ⚠️  ${componentName} already exists at src/components/ui/${componentName.toLowerCase()}.tsx. Skipping.`);
    } else {
        writeFileSync(componentPath, template);
        console.log(`   ✅ Created src/components/ui/${componentName.toLowerCase()}.tsx`);
    }

} else {
  console.log("Unknown command. Available commands:");
  console.log("  npx canx-ui init          Initialize dependencies and utils");
  console.log("  npx canx-ui add [name]    Add a component to your project");
}
