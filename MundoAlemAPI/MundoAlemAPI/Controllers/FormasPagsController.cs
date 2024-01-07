using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MundoAlemAPI.Context;
using MundoAlemAPI.Models;

namespace MundoAlemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormasPagsController : ControllerBase
    {
        private readonly DataContext _context;

        public FormasPagsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/FormasPags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FormasPag>>> GetformasPags()
        {
          if (_context.formasPags == null)
          {
              return NotFound();
          }
            return await _context.formasPags.ToListAsync();
        }

        // GET: api/FormasPags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FormasPag>> GetFormasPag(int id)
        {
          if (_context.formasPags == null)
          {
              return NotFound();
          }
            var formasPag = await _context.formasPags.FindAsync(id);

            if (formasPag == null)
            {
                return NotFound();
            }

            return formasPag;
        }

        // PUT: api/FormasPags/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFormasPag(int id, FormasPag formasPag)
        {
            if (id != formasPag.Id)
            {
                return BadRequest();
            }

            _context.Entry(formasPag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormasPagExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FormasPags
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FormasPag>> PostFormasPag(FormasPag formasPag)
        {
          if (_context.formasPags == null)
          {
              return Problem("Entity set 'DataContext.formasPags'  is null.");
          }
            _context.formasPags.Add(formasPag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFormasPag", new { id = formasPag.Id }, formasPag);
        }

        // DELETE: api/FormasPags/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFormasPag(int id)
        {
            if (_context.formasPags == null)
            {
                return NotFound();
            }
            var formasPag = await _context.formasPags.FindAsync(id);
            if (formasPag == null)
            {
                return NotFound();
            }

            _context.formasPags.Remove(formasPag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FormasPagExists(int id)
        {
            return (_context.formasPags?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
